import { Controller, Get, Param } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Controller('proxy')
export class ProxyController {
  constructor(private httpService: HttpService) {}

  @Get('markets/:currencyCode')
  fetchMarketData(@Param('currencyCode') currencyCode: string) {
    return this.httpService
      .get(`https://api.coinone.co.kr/public/v2/markets/${currencyCode}`)
      .pipe(map((response) => response.data));
  }

  @Get('ticker_new/:currencyCode')
  fetchTickerNew(@Param('currencyCode') currencyCode: string) {
    return this.httpService
      .get(
        `https://api.coinone.co.kr/public/v2/ticker_new/${currencyCode}?additional_data=false`,
        { headers: { accept: 'application/json' } },
      )
      .pipe(map((response) => response.data));
  }

  @Get('markets/:quoteCurrency/:targetCurrency')
  fetchMarketInfo(
    @Param('quoteCurrency') quoteCurrency: string,
    @Param('targetCurrency') targetCurrency: string,
  ) {
    return this.httpService
      .get(
        `https://api.coinone.co.kr/public/v2/markets/${quoteCurrency}/${targetCurrency}`,
      )
      .pipe(map((response) => response.data));
  }

  @Get('chart/:quoteCurrency/:targetCurrency')
  fetchChartData(
    @Param('quoteCurrency') quoteCurrency: string,
    @Param('targetCurrency') targetCurrency: string,
  ) {
    return this.httpService
      .get(
        `https://api.coinone.co.kr/public/v2/chart/${quoteCurrency}/${targetCurrency}`,
      )
      .pipe(map((response) => response.data));
  }
}
