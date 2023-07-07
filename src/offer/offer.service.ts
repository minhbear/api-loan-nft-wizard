import { Injectable } from '@nestjs/common';
import { DATA_REQUESTS } from 'src/common/data';

@Injectable()
export class OfferService {
  getListRequestsOfOffer(offerId: number) {
    // HERE WE DEFAULT GET A REQUEST BELONG TO OFFER ID = 1;

    const listRequests = DATA_REQUESTS.filter(
      (request) => request.offerId === +offerId,
    );

    return listRequests;
  }
}
