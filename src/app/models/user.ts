export class User {
    profile:JSON
    favorites = []
    status:string;

    constructor(profile, status) {
        this.profile = profile
        this.status = status
    }

}
