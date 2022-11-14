export interface AuthResponse {
    id?:          number;
    name?:        string;
    surname?:     string;
    last_name?:   string;
    email?:       string;
    username?:    string;
    issues?:      number;
    teams?:       number;
    resolutions?: number;
    helps?:       number;
    team?:        Team;
    usertype?:    Usertype;
    timestamp?:    string;
    status?:       string;
    message?:      string;
    details?:      string;
}

export interface Team {
    id:         number;
    name:       string;
    developer:  number;
    developers: number;
    project:    number;
}

export interface Usertype {
    id:         number;
    name:       string;
    developers: number;
}