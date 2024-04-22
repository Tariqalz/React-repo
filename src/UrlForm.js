const UrlForm = () => {
    return (
        <div>

            <div>
                <input className="input" type="text" placeholder="Enter the link here" />

                <button type="submit">Shorten URL</button>
            </div>

            <div>
                <p> Shortened URL : <a href="#" target="_blank">The Shortened URL</a></p>
            </div>

        </div>
    );
}


export default UrlForm;