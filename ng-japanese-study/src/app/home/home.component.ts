import { Component, OnInit } from '@angular/core';

import { SessionService } from 'app/session.service';

@Component({
	selector: 'jap-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private session: SessionService) { }

	ngOnInit() {
		this.session.get('http://jisho.org/api/v1/search/words?keyword=house').subscribe(x => {
			console.log("X",x);
		})
	}

}
