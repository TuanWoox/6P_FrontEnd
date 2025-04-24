import { HomeIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router"; // Assuming 'react-router' is correct based on your import, react-router-dom is common for web

// The component now accepts a 'breadcrumbs' prop
// This prop should be an array of objects like:
// [{ label: 'Trang chủ', path: '/customer', icon: true }, { label: 'Danh sách tiết kiệm', path: '/customer/saving' }, { label: 'Tiền gửi không kỳ hạn', isCurrent: true }]
// 'icon: true' can be used to indicate the first item should have the home icon
// 'isCurrent: true' marks the last item in the path

function Breadcrumbs({ breadcrumbs }) {
    if (!breadcrumbs || breadcrumbs.length === 0) {
        return null; // Don't render anything if no breadcrumbs are provided
    }

    return (
        <nav className="text-gray-500 text-sm mb-6" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
                {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="flex items-center">
                        {/* Render HomeIcon only for the first item if specified */}
                        {index === 0 && crumb.icon && (
                             <HomeIcon className="w-4 h-4 mr-2 text-gray-600" /> // Adjusted size slightly to match image
                        )}

                        {/* Render a span if it's the current item, otherwise render a Link */}
                        {crumb.isCurrent ? (
                            <span className="text-gray-800">{crumb.label}</span>
                        ) : (
                            <Link to={crumb.path} className="text-gray-600 transition duration-300 hover:text-[#96C576]">
                                {crumb.label}
                            </Link>
                        )}

                        {/* Add the separator '/' between items */}
                        {index < breadcrumbs.length - 1 && (
                            <span className="mx-2">/</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;