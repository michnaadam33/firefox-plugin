<?php

namespace AppBundle\Controller;

use AppBundle\Repository\UrlRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/urls", name="urls")
     */
    public function urlsAction(Request $request)
    {
        /** @var UrlRepository $urlRepository */
        $urlRepository = $this->getDoctrine()->getRepository('AppBundle:Url');
        $arr = $urlRepository->createQueryBuilder('u')
            ->select('u.regex', 'u.selector','u.startDate','u.endDate','u.phrase')
            ->getQuery()
            ->getArrayResult();


        return JsonResponse::create($this->converseDate($arr));
    }

    /**
     * @param array $arr
     * @return array
     */
    private function converseDate(array $arr){
        foreach ($arr as $key =>$url){
            if($url['startDate']){
                $arr[$key]['startDate'] = ($url['startDate'])->getTimestamp();
            }
            if($url['endDate']){
                $arr[$key]['endDate'] = ($url['endDate'])->getTimestamp();
            }
        }
        return $arr;
    }

    /**
     * @Route("/ping", name="ping")
     */
    public function pingAction(Request $request)
    {
        $arr = ['pong'];

        return JsonResponse::create($arr);
    }

    /**
     * @Route("/", name="main")
     */
    public function indexAction(Request $request)
    {
        return $this->render('default/index.html.twig');
    }
}
