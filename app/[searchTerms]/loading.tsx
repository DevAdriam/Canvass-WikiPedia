import styles from "./loading.module.css";

const Loading = () => {
	return (
		<div className={styles.loader}>
			<span className={styles.loaderText}>Loading</span>
			<span className={styles.load}></span>
		</div>
	);
};

export default Loading;
