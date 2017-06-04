<?php
namespace Tests\AppBundle\Entity;

use AppBundle\Entity\Url;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Validator\Constraints\Date;

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

    public function testPhrase()
    {
        $url = new Url();
        $result = $url->setPhrase('Test');

        $this->assertEquals('Test', $result->getPhrase());
    }

    public function testStartDate()
    {
        $url = new Url();
        $testDate = new Date();
        $result = $url->setStartDate($testDate);

        $this->assertEquals($testDate, $result->getStartDate());
    }

    public function testEndDate()
    {
        $url = new Url();
        $testDate = new Date();
        $result = $url->setEndDate($testDate);

        $this->assertEquals($testDate, $result->getEndDate());
    }
}