"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by daign on 4/21/2017.
 */
var Section = (function () {
    function Section(id, instructor, time, day, capacity, enrolled) {
        this.id = id;
        this.instructor = instructor;
        this.time = time;
        this.days = day;
        this.capacity = capacity;
        this.enrolled = enrolled;
    }
    Section.prototype.getId = function () {
        return this.id;
    };
    Section.prototype.getTime = function () {
        return this.time;
    };
    Section.prototype.getDay = function () {
        return this.days;
    };
    Section.prototype.getCapactiy = function () {
        return this.capacity;
    };
    Section.prototype.isEnrolled = function () {
        return this.enrolled;
    };
    return Section;
}());
exports.Section = Section;
