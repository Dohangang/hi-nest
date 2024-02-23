import { Controller, Get, Param } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get(':n/:m')
  home(@Param('n') n: number, @Param('m') m: number) {
    function gcd(a, b) {
      return b ? gcd(b, a % b) : a;
    }

    function lcm(a, b) {
      return (a * b) / gcd(a, b);
    }

    return [gcd(n, m), lcm(n, m)];
  }
}
