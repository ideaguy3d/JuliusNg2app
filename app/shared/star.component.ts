/**
 * Created by Julius Hernandez on 6/4/2016.
 */
import {Component, OnChanges, Input,
    Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth:number;
    @Input() rating:number;
    @Output() ratingClicked: EventEmitter<string>
        = new EventEmitter<string>();

    ngOnChanges():void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
        this.ratingClicked.emit(`zRating = ${this.rating} `);
    }
}

//