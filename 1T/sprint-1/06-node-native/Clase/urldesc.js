function urldes(url) {
	
    const myURL = new URL(url);

    const info = {
        protocol: myURL.protocol,
        //ipAdress: myURL.,
        subDomain: myURL.hostname,
        domainName: myURL.host,
        folderTree: myURL.pathname,
        //targetFile: myURL.,
        argumentsFile: myURL.search,
        params: myURL.searchParams,
    }

    return info;
    
}

console.log(urldesc('https://www.google.com/search/test.js?ok=1'));