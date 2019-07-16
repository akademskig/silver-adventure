export type User = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    phones: Array<PhoneItem>,
    profile_photo: string
}

interface PhoneItem {
    label: string,
    name: string,
    number: string
}