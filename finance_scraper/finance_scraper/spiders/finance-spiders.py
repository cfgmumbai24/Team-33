import scrapy
from collections import defaultdict
from w3lib.html import remove_tags

class FinanceSpider(scrapy.Spider):
    name = "finance"
    start_urls = [
        'https://www.investopedia.com/',
        'https://www.bloomberg.com/',
        'https://www.cnbc.com/finance/',
        'https://www.reuters.com/finance',
        'https://finance.yahoo.com/news/',
        'https://www.khanacademy.org/economics-finance-domain/core-finance',
        'https://www.coursera.org/courses?query=finance',
        'https://www.edx.org/learn/finance',
        'https://www.thebalance.com/personal-finance-4013783',
        'https://www.reddit.com/r/financialindependence/',
        'https://www.reddit.com/r/personalfinance/',
        'https://www.reddit.com/r/investing/',
        'https://www.bogleheads.org/forum/',
        'https://www.nerdwallet.com/banking',
        'https://www.bankrate.com/banking/',
        'https://www.mybanktracker.com/',
        'https://www.moneycrashers.com/banking/'
    ]
    domain_link_count = defaultdict(int)
    max_links_per_domain = 10

    def parse(self, response):
        domain = response.url.split('/')[2]
        if self.domain_link_count[domain] < self.max_links_per_domain:
            self.domain_link_count[domain] += 1

            for article in response.css('a::attr(href)').extract():
                if article.startswith('http'):
                    yield response.follow(article, self.parse_article)

            next_page = response.css('a.next-page::attr(href)').get()
            if next_page is not None:
                yield response.follow(next_page, self.parse)

    def parse_article(self, response):
        domain = response.url.split('/')[2]
        if self.domain_link_count[domain] <= self.max_links_per_domain:
            yield {
                'title': response.css('title::text').get().strip(),
                'content': self.extract_text_content(response),
                'url': response.url
            }

    def extract_text_content(self, response):
        paragraphs = response.css('p::text').getall()
        text_content = ' '.join([remove_tags(p).strip() for p in paragraphs if p.strip()])
        return text_content
