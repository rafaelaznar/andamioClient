import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDeveloper } from 'src/app/model/developer-interface';
import { Team, TeamResponse } from 'src/app/model/team-interface';
import { Usertype, UsertypeResponse } from 'src/app/model/usertype-response-interface';
import { DeveloperService } from 'src/app/service/developer.service';
import { TeamService } from 'src/app/service/team.service';
import { UsertypeService } from 'src/app/service/usertype.service';

@Component({
    selector: 'app-developer-new-admin-routed',
    templateUrl: './developer-new-admin-routed.component.html',
    styleUrls: ['./developer-new-admin-routed.component.css'],
})
export class DeveloperNewAdminRoutedComponent implements OnInit {
  
    newDeveloperForm: FormGroup = this.oFormBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        lastname: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        team: ['1'],
        usertype: ['1'],
    });

    usertypeList: Usertype[];
    teamList: Team[];
    initialValues: any;
    response: number =0;
    error: boolean = false;

    constructor(
        private oFormBuilder: FormBuilder,
        private oDeveloperService: DeveloperService,
        private oUsertypeService: UsertypeService,
        private oTeamService: TeamService
    ) {}

    ngOnInit(): void {
        this.initialValues = this.newDeveloperForm.value;
        this.getUsertypeList();
        this.getTeamList();
    }

    getUsertypeList() {
        this.oUsertypeService.getUsersTypePlist(0, 1000).subscribe({
            next: (resp: UsertypeResponse) => {
                this.usertypeList = resp.content;
            },
            error: (err: HttpErrorResponse) => {
                console.log(err);
            },
        });
    }

    getTeamList() {
        this.oTeamService.getTeamsPlist(0, 1000, '', 0).subscribe({
            next: (resp: TeamResponse) => {
                this.teamList = resp.content;
            },
            error: (err: HttpErrorResponse) => {
                console.log(err);
            },
        });
    }

    invalidInput(campo: string) {
        return (
            this.newDeveloperForm.controls[campo].errors &&
            this.newDeveloperForm.controls[campo].touched
        );
    }

    resetForm() {
        this.newDeveloperForm.reset(this.initialValues);
    }

    setForm() {
        if (this.newDeveloperForm.valid) {
            this.oDeveloperService
                .setNewDeveloper(
                    this.formatDeveloper(this.newDeveloperForm.value)
                )
                .subscribe({
                    next: (resp: number) => {
                        console.log(resp);
                        this.response = resp;
                        setTimeout(() => {
                            this.response=0;
                        }, 2000);
                        this.resetForm();
                    },
                    error: (err: HttpErrorResponse) => {
                        console.log(err);
                        this.error = true;
                        setTimeout(() => {
                            this.error=false;
                        }, 2000);
                    },
                });
        } else {
            this.newDeveloperForm.markAllAsTouched();
        }
    }

    formatDeveloper(formValue: any): IDeveloper {
        let idTeam = {
            id: formValue.team,
        };
        let idUsertype = {
            id: formValue.usertype,
        };
        delete formValue.team;
        delete formValue.usertype;
        let newDeveloper = formValue;
        newDeveloper.team = idTeam;
        newDeveloper.usertype = idUsertype;
        return newDeveloper;
    }
}
