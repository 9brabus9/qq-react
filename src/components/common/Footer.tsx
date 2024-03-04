import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex items-center flex-col lg:flex-row px-4 py-2.5 mt-auto justify-normal lg:justify-between bg-gray-50">
            <div className="inline-flex items-center text-sm mb-5 lg:mb-0 text-center lg:text-left">Copyright © 2016 - 2024 Best moving companies in USA. All rights reserved.</div>
            <div className="flex flex-col lg:flex-row">
                <div className="inline-flex items-center flex-col lg:flex-row first:mt-0 mb-5 lg:mb-0">
                    <Link className="mt-2 lg:mt-0 ml-0 text-sm lg:ml-4 hover:text-primary" to='/'>Terms & Condidtions</Link>
                    <Link className="mt-2 lg:mt-0 ml-0 text-sm lg:ml-4 hover:text-primary" to='/'>Privacy Policy</Link>
                    <Link className="mt-2 lg:mt-0 ml-0 text-sm lg:ml-4 hover:text-primary" to='/'>Blog</Link>
                </div>
                <div className="ml-0 lg:ml-20 inline-flex items-center justify-center">
                    <a className="w-[30px] h-[30px] rounded-full bg-black text-white inline-flex items-center justify-center hover:bg-primary ml-2" href="#" target="_blank">
                        <i className="icon-facebook1"></i>
                    </a>
                    <a className="w-[30px] h-[30px] rounded-full bg-black text-white inline-flex items-center justify-center hover:bg-primary ml-2" href="#" target="_blank">
                        <i className="icon-twitter1"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
