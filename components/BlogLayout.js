const BlogLayout = ({ children, ...props }) => {
	return (
		<div className="max-w-screen-sm mx-auto">
			<div {...props}>{children}</div>
		</div>
	);
};
export default BlogLayout;
