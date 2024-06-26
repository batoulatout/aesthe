<?php

namespace GeminiLabs\SiteReviews\Modules;

use GeminiLabs\SiteReviews\Helper;
use GeminiLabs\SiteReviews\Modules\Html\Builder;

class Captcha
{
    public function config(): array
    {
        if (!$this->isEnabled()) {
            return [];
        }
        $method = Helper::buildMethodName('config', (string) glsr_get_option('forms.captcha.integration'));
        if (!method_exists($this, $method)) {
            return [];
        }
        $config = call_user_func([$this, $method]);
        return wp_parse_args($config, [
            'badge' => '',
            'class' => '',
            'language' => glsr()->filterString('captcha/language', $this->getLocale()),
            'sitekey' => '',
            'size' => '',
            'theme' => '',
            'type' => '',
            'urls' => [],
        ]);
    }

    public function container(): string
    {
        if (!$this->isEnabled()) {
            return '';
        }
        return glsr(Builder::class)->div([
            'class' => 'glsr-captcha-holder',
        ]);
    }

    public function isEnabled(string $service = ''): bool
    {
        $integration = glsr_get_option('forms.captcha.integration');
        $usage = glsr_get_option('forms.captcha.usage');
        $isEnabled = 'all' === $usage || ('guest' === $usage && !is_user_logged_in());
        if (!empty($service)) {
            return $integration === $service && $isEnabled;
        }
        return !empty($integration) && $isEnabled;
    }

    /**
     * @see https://docs.friendlycaptcha.com/
     */
    protected function configFriendlycaptcha(): array
    {
        return [
            'class' => 'frc-captcha '.glsr_get_option('forms.captcha.theme'),
            'sitekey' => glsr_get_option('forms.friendlycaptcha.key'),
            'theme' => glsr_get_option('forms.captcha.theme'),
            'type' => 'friendlycaptcha',
            'urls' => [ // order is intentional, the module always loads first
                'https://unpkg.com/friendly-challenge@0.9.4/widget.module.min.js',
                'https://unpkg.com/friendly-challenge@0.9.4/widget.min.js',
            ],
        ];
    }

    /**
     * @see https://docs.hcaptcha.com/
     */
    protected function configHcaptcha(): array
    {
        $urlParameters = array_filter([
            'hl' => glsr()->filterString('captcha/language', $this->getLocale()),
            'render' => 'explicit',
        ]);
        return [
            'badge' => glsr_get_option('forms.captcha.position'),
            'class' => 'glsr-h-captcha', // @compat
            'sitekey' => glsr_get_option('forms.hcaptcha.key'),
            'size' => 'normal',
            'theme' => glsr_get_option('forms.captcha.theme'),
            'type' => 'hcaptcha',
            'urls' => [
                add_query_arg($urlParameters, 'https://js.hcaptcha.com/1/api.js'),
            ],
        ];
    }

    /**
     * @see https://developers.google.com/recaptcha/docs/invisible
     */
    protected function configRecaptchaV2Invisible(): array
    {
        $urlParameters = array_filter([
            'hl' => glsr()->filterString('captcha/language', $this->getLocale()),
            'render' => 'explicit',
        ]);
        return [
            'badge' => glsr_get_option('forms.captcha.position'),
            'class' => 'glsr-g-recaptcha',
            'sitekey' => glsr_get_option('forms.recaptcha.key'),
            'size' => 'invisible',
            'theme' => glsr_get_option('forms.captcha.theme'),
            'type' => 'recaptcha_v2_invisible',
            'urls' => [
                add_query_arg($urlParameters, 'https://www.google.com/recaptcha/api.js'),
            ],
        ];
    }

    /**
     * @see https://developers.google.com/recaptcha/docs/v3
     */
    protected function configRecaptchaV3(): array
    {
        $urlParameters = array_filter([
            'hl' => glsr()->filterString('captcha/language', $this->getLocale()),
            'render' => 'explicit',
        ]);
        return [
            'badge' => glsr_get_option('forms.captcha.position'),
            'class' => 'glsr-g-recaptcha',
            'sitekey' => glsr_get_option('forms.recaptcha_v3.key'),
            'size' => 'invisible',
            'theme' => glsr_get_option('forms.captcha.theme'),
            'type' => 'recaptcha_v3',
            'urls' => [
                add_query_arg($urlParameters, 'https://www.google.com/recaptcha/api.js'),
            ],
        ];
    }

    /**
     * @see https://developers.cloudflare.com/turnstile/
     */
    protected function configTurnstile(): array
    {
        $urlParameters = array_filter([
            'hl' => glsr()->filterString('captcha/language', $this->getLocale()),
            'render' => 'explicit',
        ]);
        return [
            'class' => 'glsr-cf-turnstile',
            'sitekey' => glsr_get_option('forms.turnstile.key'),
            'theme' => glsr_get_option('forms.captcha.theme'),
            'type' => 'turnstile',
            'urls' => [
                add_query_arg($urlParameters, 'https://challenges.cloudflare.com/turnstile/v0/api.js'),
            ],
        ];
    }

    /**
     * @see https://developers.google.com/recaptcha/docs/language
     * @see https://community.cloudflare.com/t/change-language-for-turnstile/426108/3
     */
    protected function getLocale(): string
    {
        $locale = '';
        if (function_exists('locale_parse')) {
            $values = locale_parse(get_locale());
            if (!empty($values['language'])) {
                $locale = $values['language'];
            }
        }
        return glsr()->filterString('captcha/language', $locale);
    }
}
