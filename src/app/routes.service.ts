import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class RoutesService {

  public service: any;

  constructor(private apiService: ApiService) {
    this.service = apiService.app.service('routes');
  }

}
