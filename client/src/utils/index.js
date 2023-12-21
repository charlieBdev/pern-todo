const formatDate = (timestamp) => {
	const currentTime = new Date();
	const eventTime = new Date(timestamp);
	const timeDifference = currentTime - eventTime;

	const seconds = Math.floor(timeDifference / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	if (seconds < 60) {
		return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
	} else if (minutes < 60) {
		return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
	} else if (hours < 24) {
		return `${hours} hour${hours === 1 ? '' : 's'} ago`;
	} else {
		return `${days} day${days === 1 ? '' : 's'} ago`;
	}
};

export { formatDate };
