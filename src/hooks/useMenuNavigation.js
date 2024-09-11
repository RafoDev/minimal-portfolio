import { useEffect, useRef, useState } from 'react';

export const useKeyNavigation = (
	options,
  onSelectOption,
	initialIndex = -1,
) => {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [trigger, setTrigger] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		const handleMouseHover = (e) => {
			setCurrentIndex(-1);
		};

		const handleKeyDown = (e) => {
			if (e.key === 'ArrowDown') {
				e.preventDefault();
				setCurrentIndex((prevIndex) =>
					prevIndex < options.length - 1 ? prevIndex + 1 : 0
				);
			}
			if (e.key === 'ArrowUp') {
				e.preventDefault();
				setCurrentIndex((prevIndex) =>
					prevIndex > 0 ? prevIndex - 1 : options.length - 1
				);
			}
			if (e.key === 'Enter' && currentIndex !== -1) {
        onSelectOption(options[currentIndex]);
				// alert(`Seleccionaste: ${options[currentIndex]}`);
			}
		};

		if (menuRef.current) {
      const menu = menuRef.current;
			menu.addEventListener('keydown', handleKeyDown);
			menu.addEventListener('mouseover', handleMouseHover);
		}

		return () => {
			if (menuRef.current) {
        const menu = menuRef.current;
				menu.removeEventListener('keydown', handleKeyDown);
				menu.removeEventListener('onmousemove', handleMouseHover);
			}
		};
	}, [currentIndex, trigger]);

	const optionIsSelected = (index) => {
		return currentIndex === index;
	};

	return {
		menuRef,
		optionIsSelected,
    setTrigger
	};
};
