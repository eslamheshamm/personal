const Layout = ({ children, ...props }) => {
	return (
		<main className="max-w-screen-sm mx-auto w-full text-xl">
			<div className=" p-4 " {...props}>
				<div>{children}</div>
			</div>
		</main>
	);
};
export default Layout;
