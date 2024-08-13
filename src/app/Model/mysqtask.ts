export class MySqlTask {
    constructor(
        public taskCode:string,
        public assignedTo:string,
        public createdAt:string,
        public desc:string,
        public priority:string,
        public status:string,
        public title:string
    ) {}
}