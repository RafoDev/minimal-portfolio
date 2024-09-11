import { useEffect, useRef, useState } from "react";

export const useKeyNavigation = (options, optionFocusedClass, initialIndex = -1) => {
  
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
	const menuRef = useRef();

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
		};
		const menu = menuRef.current;
		menu.addEventListener('keydown', handleKeyDown);
		menu.addEventListener('mouseover', handleMouseHover);

		return () => {
			menu.removeEventListener('keydown', handleKeyDown);
			menu.removeEventListener('onmousemove', handleMouseHover);
		};
	}, [currentIndex]);

	const optionIsSelected = (index) => {
		if (currentIndex === index)
			return optionFocusedClass;
	}
  
  return {
    menuRef,
    optionIsSelected,
  }
}
