<?php
/**
 * Recent Work Context Filter
 *
 * Adds recent_work_items to the global Timber context.
 * Gets all published recent-work posts ordered by menu_order (for manual sorting).
 *
 * Usage in patterns:
 * <div loopsource="recent_work_items" loopvariable="work">
 *   <h3>{{ work.title }}</h3>
 *   <p>{{ work.meta('category_type') }}</p>
 * </div>
 */

use Timber\Timber;

add_filter('timber/context', function($context) {
    // Query recent-work custom post type
    $context['recent_work_items'] = Timber::get_posts([
        'post_type'      => 'recent-work',
        'posts_per_page' => -1, // Get all
        'post_status'    => 'publish',
        'orderby'        => 'menu_order', // Allows manual sorting in admin
        'order'          => 'ASC',
    ]);

    return $context;
});
