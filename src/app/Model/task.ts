export class Task {
    constructor(
        public assignedTo:string,
        public createdAt:string,
        public esc:string,
        public priority:string,
        public status:string,
        public title:string
    ) {

    }
}