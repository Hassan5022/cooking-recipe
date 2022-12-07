import { useEffect, useState } from "react";

export const useFetch = (url, method = "GET") => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [options, setOptions] = useState(null)

	const postData = (postData) => {
		setOptions({
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(postData)
		})
	}

    useEffect(() => {
		const controller = new AbortController();
		const fetchData = async (fetchOptions) => {
			setIsPending(true);
			try {
				setError(null);
				const response = await fetch(url, {...fetchOptions, signal: controller.signal });
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const responseData = await response.json();
				setData(responseData);
				setIsPending(false);
            } catch (error) {
                if(error.name === 'AbortError'){
					console.log("The fetch was aborted")
                } else {
                    setIsPending(false);
                    setError("Not Found!");
                }
			}
		};
		if (method === "GET") fetchData()
		if(method === "POST" && options) fetchData(options)
        return () => controller.abort();
	}, [url, method, options]);

	return { data, isPending, error, postData };
};
