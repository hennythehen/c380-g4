"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = (function () {
    function Course(name, title, department, coursePreReqs, concurrentLab, courseSections) {
        this.name = name;
        this.title = title;
        this.department = department;
        this.coursePreReqs = coursePreReqs;
        this.concurrentLab = concurrentLab;
        this.courseSections = courseSections;
    }
    Course.prototype.getName = function () {
        return this.name;
    };
    Course.prototype.getTitle = function () {
        return this.title;
    };
    Course.prototype.getDepartment = function () {
        return this.department;
    };
    Course.prototype.getPreReqCourses = function () {
        return this.coursePreReqs;
    };
    Course.prototype.getConcurrentLab = function () {
        return this.concurrentLab;
    };
    Course.prototype.hasConcurrentLab = function () {
        if (this.concurrentLab !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    Course.prototype.getCourseSections = function () {
        return this.courseSections;
    };
    return Course;
}());
exports.Course = Course;
