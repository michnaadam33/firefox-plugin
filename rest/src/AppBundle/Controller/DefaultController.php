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
            ->select('u.regex', 'u.selector')
            ->getQuery()
            ->getArrayResult();

        return JsonResponse::create($arr);
    }
}
