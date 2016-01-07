/*!
 * Switchy - iOS Style switches for checkboxes
 * 
 * This library can be used as a pure CSS (or LESS) implementation of iOS style switch styles for checkboxes
 * You can use this javascript to add the ability of the checkboxes to update their values based on data-attributes in the markup (making it a little less pure ;) )
 *
 * With thanks to Bandar Raffah for the great work
 * on this pure CSS implementation:
 *
 * http://codepen.io/BandarRaffah/pen/ibwje
 *   
 * VERSION: 0.0.1
 * DATE: 2016-01-7
 *
 * @license Licensed under the MIT License
 * See LICENSE for details
 * 
 * @author: Matt Daniels, me@mattdaniels.com.au
 */
(function($) {

    $(document).ready(function() {

        function notNull(obj) {
            return (obj !== null && typeof obj !== 'undefined');
        }

        // ios style switches
        // this is only a small js extension to allow the value to be set on the checkbox when the switch changes
        $('input[type="checkbox"].ios-switch').on('change.ios-switch', updateSwitchCheckbox);

        function updateSwitchCheckbox(e, target) {
            var $this;
             
            if (notNull(target)) {
                $this = $(target);
            } else {
                $this = $(this);
            }
            var $switchDiv = $this.nextAll('div.switch-track');

            if ($switchDiv.length > 0) {
                var onVal = $switchDiv.data('switch-on-value'),
                    offVal = $switchDiv.data('switch-off-value');

                if (notNull(onVal) || notNull(offVal)) {
                    onVal = notNull(onVal) ? onVal : 'checked';
                    offVal = notNull(offVal) ? offVal : 'unchecked';

                    var val = $this.is(':checked') ? onVal : offVal;
                    // set the value of the checkbox
                    $this.val(val);
                }
            }
        }

        // force an initialisation update of the switch values
        $('input[type="checkbox"].ios-switch').each(function(i, v) {
            updateSwitchCheckbox(null, v);
        });
    });

})(window.jQuery);
