/* ========================================================================
 * Bootstrap: popover.js v3.0.3
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


// +function ($) {
//     "use strict";
//
//     // POPOVER PUBLIC CLASS DEFINITION
//     // ===============================
//
//     var Popover = function (element, options) {
//         this.init('popover', element, options)
//     }
//
//     if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')
//
//     Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
//         placement: 'right',
//         trigger: 'click',
//         content: '',
//         template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
//     })
//
//
//     // NOTE: POPOVER EXTENDS tooltip.js
//     // ================================
//
//     Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)
//
//     Popover.prototype.constructor = Popover
//
//     Popover.prototype.getDefaults = function () {
//         return Popover.DEFAULTS
//     }
//
//     Popover.prototype.setContent = function () {
//         var $tip = this.tip()
//         var title = this.getTitle()
//         var content = this.getContent()
//
//         $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
//         $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)
//
//         $tip.removeClass('fade top bottom left right in')
//
//         // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
//         // this manually by checking the contents.
//         if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
//     }
//
//     Popover.prototype.hasContent = function () {
//         return this.getTitle() || this.getContent()
//     }
//
//     Popover.prototype.getContent = function () {
//         var $e = this.$element
//         var o = this.options
//
//         return $e.attr('data-content')
//             || (typeof o.content == 'function' ?
//                 o.content.call($e[0]) :
//                 o.content)
//     }
//
//     Popover.prototype.arrow = function () {
//         return this.$arrow = this.$arrow || this.tip().find('.arrow')
//     }
//
//     Popover.prototype.tip = function () {
//         if (!this.$tip) this.$tip = $(this.options.template)
//         return this.$tip
//     }
//
//
//     // POPOVER PLUGIN DEFINITION
//     // =========================
//
//     var old = $.fn.popover
//
//     $.fn.popover = function (option) {
//         return this.each(function () {
//             var $this = $(this)
//             var data = $this.data('bs.popover')
//             var options = typeof option == 'object' && option
//
//             if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
//             if (typeof option == 'string') data[option]()
//         })
//     }
//
//     $.fn.popover.Constructor = Popover
//
//
//     // POPOVER NO CONFLICT
//     // ===================
//
//     $.fn.popover.noConflict = function () {
//         $.fn.popover = old
//         return this
//     }
//
// }(jQuery);

(function ($) {
    $.fn.extend({
        //初始化
        loadStep: function (params) {
            //基础框架
            var baseHtml = "<div class='ystep-container'>" +
                "<ul class='ystep-container-steps'>" +
                "</ul>" +
                "<div class='ystep-progress'>" +
                "<p class='ystep-progress-bar'>" +
                "<span class='ystep-progress-highlight' style='width:0%'>" +
                "</span>" +
                "</p>" +
                "</div>" +
                "</div>";
            //步骤框架
            //popover
            // var stepHtml = "<li class='ystep-step ystep-step-undone' data-container='body' data-toggle='popover' data-placement='left' data-title='' data-content='' data-trigger='hover'>" +
            //     "</li>";

            //tooltip
            var stepHtml = "<li class='ystep-step ystep-step-undone' data-container='body' style='text-align:left;' data-toggle='tooltip' data-placement='bottom'></li>";
            //决策器
            var logic = {
                size: {
                    small: function ($html) {
                        var stepCount = $html.find("li").length - 1,
                            containerWidth = (stepCount * 65 + 100) + "px",
                            progressWidth = (stepCount * 65) + "px";
                        $html.css({
                            width: containerWidth
                        });
                        $html.find(".ystep-progress").css({
                            width: progressWidth
                        });
                        $html.find(".ystep-progress-bar").css({
                            width: progressWidth
                        });
                        $html.addClass("ystep-sm");
                    },
                    large: function ($html) {
                        var stepCount = $html.find("li").length - 1,
                            containerWidth = (stepCount * 100 + 100) + "px",
                            progressWidth = (stepCount * 100) + "px";
                        $html.css({
                            width: containerWidth
                        });
                        $html.find(".ystep-progress").css({
                            width: progressWidth
                        });
                        $html.find(".ystep-progress-bar").css({
                            width: progressWidth
                        });
                        $html.addClass("ystep-lg");
                    }
                },
                color: {
                    green: function ($html) {
                        $html.addClass("ystep-green");
                    },
                    blue: function ($html) {
                        $html.addClass("ystep-blue");
                    }
                }
            };

            //支持填充多个步骤容器
            $(this).each(function (i, n) {
                var $baseHtml = $(baseHtml),
                    $stepHtml = $(stepHtml),
                    $ystepContainerSteps = $baseHtml.find(".ystep-container-steps"),
                    arrayLength = 0,
                    $n = $(n),
                    i = 0;

                //步骤
                arrayLength = params.steps.length;
                for (i = 0; i < arrayLength; i++) {
                    var _s = params.steps[i];
                    //构造步骤html
                    $stepHtml.attr("data-title", _s.title);
                    $stepHtml.attr("data-content", _s.content);
                    $stepHtml.text(_s.title);
                    //将步骤插入到步骤列表中
                    $ystepContainerSteps.append($stepHtml);
                    //重置步骤
                    $stepHtml = $(stepHtml);
                }

                //尺寸
                logic.size[params.size || "small"]($baseHtml);
                //配色
                logic.color[params.color || "green"]($baseHtml);

                //插入到容器中
                $n.append($baseHtml);
                //渲染提示气泡
                // $n.find(".ystep-step").popover({});
                //默认执行第一个步骤
                $n.setStep(1);
            });
        },
        //跳转到指定步骤
        setStep: function (step) {
            $(this).each(function (i, n) {
                //获取当前容器下所有的步骤
                var $steps = $(n).find(".ystep-container").find("li");
                var $progress = $(n).find(".ystep-container").find(".ystep-progress-highlight");
                //判断当前步骤是否在范围内
                if (1 <= step && step <= $steps.length) {
                    //更新进度
                    var scale = "%";
                    scale = Math.round((step - 1) * 100 / ($steps.length - 1)) + scale;
                    $progress.animate({
                        width: scale
                    }, {
                        speed: 1000,
                        done: function () {
                            //移动节点
                            $steps.each(function (j, m) {
                                var _$m = $(m);
                                var _j = j + 1;
                                if (_j < step) {
                                    _$m.attr("class", "ystep-step-done");
                                } else if (_j === step) {
                                    _$m.attr("class", "ystep-step-active");
                                } else if (_j > step) {
                                    _$m.attr("class", "ystep-step-undone");
                                }
                            });
                        }
                    });
                } else {
                    return false;
                }
            });
        },
        //获取当前步骤
        getStep: function () {
            var result = [];

            $(this)._searchStep(function (i, j, n, m) {
                result.push(j + 1);
            });

            if (result.length == 1) {
                return result[0];
            } else {
                return result;
            }
        },
        //下一个步骤
        nextStep: function () {
            $(this)._searchStep(function (i, j, n, m) {
                $(n).setStep(j + 2);
            });
        },
        //上一个步骤
        prevStep: function () {
            $(this)._searchStep(function (i, j, n, m) {
                $(n).setStep(j);
            });
        },
        //通用节点查找
        _searchStep: function (callback) {
            $(this).each(function (i, n) {
                var $steps = $(n).find(".ystep-container").find("li");
                $steps.each(function (j, m) {
                    //判断是否为活动步骤
                    if ($(m).attr("class") === "ystep-step-active") {
                        if (callback) {
                            callback(i, j, n, m);
                        }
                        return false;
                    }
                });
            });
        }
    });
})(jQuery);