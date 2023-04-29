import axios, * as others from 'axios';

export class API {
    controller = new AbortController();
    public async checkDomainAvailaility(domainName: string): Promise<any> {
        this.controller.abort();
        // const apiURL = `https://api.agify.io?name=${domainName}`;
        const apiURL = `https://hub.dummyapis.com/delay?seconds=2`;
        const response = await axios.get(apiURL);
        return response.data;
    }
}
