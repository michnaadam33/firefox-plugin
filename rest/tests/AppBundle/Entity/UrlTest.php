<?php
namespace Tests\AppBundle\Entity;

use AppBundle\Entity\Url;
use PHPUnit\Framework\TestCase;

class UrlTest extends TestCase
{
    public function testRegex()
    {
        $url = new Url();
        $result = $url->setRegex('Test');

        $this->assertEquals('Test', $result->getRegex());
    }

    public function testSelector()
    {
        $url = new Url();
        $result = $url->setSelector('Test');

        $this->assertEquals('Test', $result->getSelector());
    }
}