export class RepositoryModel {
    constructor(public id: number,
        public node_id: string,
        public name: string,
        public full_name: string,
        public description: string,
        public html_url: string,
        public stargazers_count: number,
        public open_issues_count: number,
        public url: string,
        public language: string)
        {}
}
