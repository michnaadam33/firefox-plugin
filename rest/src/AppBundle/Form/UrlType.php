<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class UrlType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('regex');
        $builder->add('selector');
        $builder->add('phrase');
        $builder->add('startDate', DateType::class, [
            'widget' => 'single_text',
            'html5' => false,
            'attr' => ['class' => 'js-datepicker'],
            'required' => false
        ]);
        $builder->add('endDate', DateType::class, [
            'widget' => 'single_text',
            'html5' => false,
            'attr' => ['class' => 'js-datepicker'],
            'required' => false
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Url'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_url';
    }


}
