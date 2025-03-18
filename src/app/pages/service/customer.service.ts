import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string;
    status?: string;
    activity?: number;
    representative?: Representative;
}

@Injectable()
export class CustomerService {
    getData() {
        return [
            {
                id: 1000,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1001,
                name: 'Josephine Darakjy',
                country: {
                    name: 'Egypt',
                    code: 'eg'
                },
                company: 'Chanay, Jeffrey A Esq',
                date: '2019-02-09',
                status: 'negotiation',
                verified: true,
                activity: 0,
                representative: {
                    name: 'Amy Elsner',
                    image: 'amyelsner.png'
                },
                balance: 82429
            },
            {
                id: 1002,
                name: 'Art Venere',
                country: {
                    name: 'Panama',
                    code: 'pa'
                },
                company: 'Chemel, James L Cpa',
                date: '2017-05-13',
                status: 'qualified',
                verified: false,
                activity: 63,
                representative: {
                    name: 'Asiya Javayant',
                    image: 'asiyajavayant.png'
                },
                balance: 28334
            },
        ];
    }

    constructor(private http: HttpClient) { }

    getCustomersMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    }

    getCustomers(params?: any) {
        return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
    }
}
