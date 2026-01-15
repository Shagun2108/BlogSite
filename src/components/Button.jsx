/**
 * Button Component
 * 
 * A reusable button component that accepts customizable styling and behavior.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to display inside the button
 * @param {string} [props.type='button'] - The HTML button type attribute (e.g., 'button', 'submit', 'reset')
 * @param {string} [props.bgColor='bg-blue-600'] - Tailwind CSS background color class
 * @param {string} [props.className=''] - Additional custom Tailwind CSS classes for extra styling
 * @param {string} [props.textColor='text-white'] - Tailwind CSS text color class
 * @param {Object} props.rest - Any additional HTML button attributes (onClick, disabled, etc.)
 * 
 * @returns {React.ReactElement} A styled button element
 * 
 * @example
 * // Basic usage
 * <Button>Click me</Button>
 * 
 * @example
 * // With custom styling
 * <Button bgColor='bg-green-500' textColor='text-black'>Save</Button>
 * 
 * @note
 * Forward Ref Implementation (for future enhancement):
 * 
 * Currently, this component does not use forwardRef. To enable parent components 
 * to access the underlying DOM button element directly, wrap the component with React.forwardRef.
 * 
 * Implementation would be:
 * const Button = React.forwardRef(({children, type, bgColor, className, textColor, ...props}, ref) => {
 *   return (
 *     <button ref={ref} className={...} type={type} {...props}>
 *       {children}
 *     </button>
 *   );
 * });
 * 
 * This allows parent components to:
 * - Focus the button programmatically: buttonRef.current.focus()
 * - Access button properties directly: buttonRef.current.disabled = true
 * - Trigger button methods: buttonRef.current.click()
 * 
 * Usage after forwardRef implementation:
 * const myButtonRef = useRef(null);
 * <Button ref={myButtonRef}>Click me</Button>
 */
import React from 'react'

const Button = ({children, type="button" ,bgColor='bg-blue-600',className='',textColor='text-white',...props}) => {
  return (
    <button className={` px-4 py-2 rounded-lg ${bgColor} ${className} ${textColor}`} type={type} {...props}>
        {children}
    </button>
  )
}

export default Button



//forward reference hook can also be used here if needed in future
// inorder to pass ref to parent component and parent can access child DOM element directly