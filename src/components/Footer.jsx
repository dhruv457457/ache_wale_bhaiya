import React from "react";

function Footer() {
  return (
    <footer className="bg-white py-4 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-500">
          © 2024 ache_wale_bhaiya, Inc. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com"
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22,12C22,6.48,17.52,2,12,2S2,6.48,2,12c0,4.84,3.66,8.84,8.39,9.73v-6.88H8.4v-2.84h2.61v-2.16c0-2.6,1.53-4.03,3.87-4.03c1.12,0,2.29,0.2,2.29,0.2v2.52H15.8c-1.41,0-1.85,0.88-1.85,1.78v2.08h3.14l-0.5,2.84h-2.64v6.88C18.34,20.84,22,16.84,22,12z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.16c3.204 0 3.584.012 4.85.07 1.17.055 1.85.24 2.27.402a4.591 4.591 0 011.666 1.06 4.597 4.597 0 011.06 1.666c.162.42.347 1.1.402 2.27.058 1.266.07 1.646.07 4.85 0 3.203-.012 3.584-.07 4.85-.055 1.17-.24 1.85-.402 2.27a4.591 4.591 0 01-1.06 1.666 4.597 4.597 0 01-1.666 1.06c-.42.162-1.1.347-2.27.402-1.266.058-1.646.07-4.85.07-3.203 0-3.584-.012-4.85-.07-1.17-.055-1.85-.24-2.27-.402a4.591 4.591 0 01-1.666-1.06 4.597 4.597 0 01-1.06-1.666c-.162-.42-.347-1.1-.402-2.27-.058-1.266-.07-1.646-.07-4.85 0-3.204.012-3.584.07-4.85.055-1.17.24-1.85.402-2.27a4.591 4.591 0 011.06-1.666 4.597 4.597 0 011.666-1.06c.42-.162 1.1-.347 2.27-.402 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.012 7.052.07 5.77.128 4.897.334 4.175.633c-.762.312-1.47.742-2.129 1.4C1.448 2.697 1.018 3.405.705 4.167.406 4.888.2 5.761.142 7.043.085 8.322.072 8.731.072 12s.013 3.679.07 4.957c.058 1.283.264 2.155.563 2.878.312.762.742 1.47 1.4 2.129.659.659 1.367 1.089 2.129 1.4.723.298 1.596.504 2.878.563C8.332 23.988 8.741 24 12 24s3.668-.012 4.947-.07c1.283-.058 2.155-.264 2.878-.563.762-.312 1.47-.742 2.129-1.4.659-.659 1.089-1.367 1.4-2.129.298-.723.504-1.596.563-2.878.058-1.279.07-1.688.07-4.947s-.012-3.668-.07-4.947c-.058-1.283-.264-2.155-.563-2.878-.312-.762-.742-1.47-1.4-2.129-.659-.659-1.367-1.089-2.129-1.4-.723-.298-1.596-.504-2.878-.563C15.668.012 15.259 0 12 0z" />
              <path d="M12 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0 10.163A4.003 4.003 0 118.001 12 4.003 4.003 0 0112 16.001zm6.406-11.844a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10.009 10.009 0 01-2.825.775 4.93 4.93 0 002.163-2.724 9.83 9.83 0 01-3.127 1.194 4.916 4.916 0 00-8.384 4.482c-4.084-.205-7.698-2.16-10.125-5.13a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.097A4.904 4.904 0 01.964 8.9v.061a4.92 4.92 0 003.946 4.827 4.902 4.902 0 01-2.213.085 4.923 4.923 0 004.6 3.419 9.864 9.864 0 01-6.102 2.102 9.89 9.89 0 01-1.171-.068 13.93 13.93 0 007.548 2.212c9.055 0 14.01-7.498 14.01-13.986 0-.21-.004-.423-.015-.636a10.025 10.025 0 002.457-2.548l-.047-.02z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.724-4.033-1.61-4.033-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.086-.743.083-.728.083-.728 1.205.086 1.84 1.24 1.84 1.24 1.068 1.834 2.804 1.304 3.49.997.108-.774.418-1.304.76-1.603-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.24-3.22-.124-.305-.537-1.53.117-3.186 0 0 1.01-.323 3.31 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.553 3.298-1.23 3.298-1.23.656 1.656.243 2.88.12 3.186.77.84 1.24 1.91 1.24 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.21v3.277c0 .322.217.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
