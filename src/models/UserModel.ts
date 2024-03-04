export class UserModel {
    id: number;
    email: string;
    address: string;
    balance: number;
    fullName: string;
    phone: number | null;
    title: string;
    constructor(data: UserDataType) {
        const dataPath = data.relationships?.profile?.data?.attributes
        this.id = data.id;
        this.email = data.attributes?.email || "";
        this.address = dataPath?.address || "";
        this.balance = dataPath?.balance || 0;
        this.fullName = dataPath?.fullName || "";
        this.phone = dataPath?.phone || null;
        this.title = dataPath?.title || "";
    }
}

interface UserDataType {
    id: number;
    attributes: {
        email: string;
    }
    relationships?: {
        profile?: {
            data?: {
                attributes?: {
                    address?: string;
                    balance?: number;
                    fullName?: string;
                    phone?: number | null;
                    title?: string;
                };
            };
        };
    };
}