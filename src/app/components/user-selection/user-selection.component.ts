import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListType } from 'src/app/enums/list-types';
import { Game } from 'src/app/interfaces/game';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-user-selections',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.scss']
})
export class UserSelectionsComponent implements OnInit{

  listType: ListType;
  listTypeTitle: string;
  ownedGames: Game[];
  wishListGames: Game[];

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.listType = this.route.snapshot.routeConfig.path === 'owned' ? ListType.OWNEDLIST : ListType.WISHLIST;
    this.listTypeTitle = this.listType === ListType.OWNEDLIST ? 'Owned Games' : 'Wishlist Games';
  }
}
