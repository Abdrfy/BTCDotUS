import axios, * as others from 'axios';

type Model = {
    age: number;
    count: number;
    name: string;
};

export class DomainAvailabilityAPI {
    static cancel: others.Canceler | undefined;
    static shared = new DomainAvailabilityAPI();

    async checkDomainAvailaility(domainName: string): Promise<any> {
        // const apiURL = `https://api.agify.io?name=${domainName}`;
        const apiURL = `https://hub.dummyapis.com/delay?seconds=3`;
        const response = await axios
            .get(apiURL, {
                cancelToken: new axios.CancelToken(function executor(c) {
                    DomainAvailabilityAPI.cancel = c;
                })
            })
            .catch(function (thrown) {
                if (axios.isCancel(thrown)) {
                    console.log('Request canceled', thrown.message);
                }
            });
        // const myData = response.data as Model;
        DomainAvailabilityAPI.cancel = undefined;
        return response ? response.data : null;
    }

    cancelRequest() {
        if (DomainAvailabilityAPI.cancel !== undefined) {
            DomainAvailabilityAPI.cancel();
        }
    }
}
