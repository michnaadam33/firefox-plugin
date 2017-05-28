<?php

namespace Tests\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class UrlControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/url/');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertContains('Urls list', $crawler->filter('.page-header h1')->text());
    }

    public function testNew()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/url/new');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertContains('Url creation', $crawler->filter('.page-header h1')->text());
    }

}
