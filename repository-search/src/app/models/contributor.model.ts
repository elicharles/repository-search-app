export class ContributorModel {
    constructor(
    public id: number,
    public node_id: string,
    public login: string,
    public avatar_url: string,
    public html_url: string,
    public url: string,
    public contributions: number){}
}
