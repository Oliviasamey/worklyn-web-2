import PropTypes from 'prop-types'; 
// import { classNames } from './classNames';

export const Button = ({children, ...props}) => (
    <button className="bg-blue-400 text-white px-4 py-2 rounded shadow-;d cursort-pointer outline-none border-none select-none disabled:bg-white disabled:cursor-not-allowed" {...props}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
}


// import PropTypes from 'prop-types';
// import { classNames } from './classNames';

// export const Button = ({ ClassName, children, rounded, variant, ...props }) => (
//     <button className={classNames(
//         "px-4 py-2 cursor-pointer select-none [outline:none shadow-md disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-100 disabled:shadow-inner", 
//         rounded ? "rounded" : "",
//         className)} 
//     {...props}>
//         {children}
//     </button>
// )

// Button.propTypes = {
//     className: PropTypes.string,
//     children: PropTypes.node.isRequired,
//     rounded: PropTypes.bool.isRequired,
//     variant: PropTypes.oneOf([
//         "primary",
//         "secondary",
//     ])
// }