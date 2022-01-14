import React from "react";
import ContentLoader from "react-content-loader"
import './TodoLoading.css';

function TodoLoading(props) {
    return <div className="LazyLoading">
    <ContentLoader 
    speed={2}
    width={600}
    height={60}
    viewBox="0 0 600 60"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
    >
    <rect x="50" y="4" rx="15" ry="15" width="488" height="60" />
    </ContentLoader></div> 
}

export { TodoLoading };