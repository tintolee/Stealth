


export type User={
id:string;
name:string;
status: String;
}

export type Message={
id:string;
content:string,
createdAt:string;
user: User;
}



export type ChatRoom  = {
id:string;
users:User[];
lastMessage:Message;
}

