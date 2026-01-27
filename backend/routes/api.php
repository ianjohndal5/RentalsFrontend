<?php

use App\Http\Controllers\Api\PropertyController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\BlogController;
use Illuminate\Support\Facades\Route;

Route::get('/properties/featured', [PropertyController::class, 'featured']);
Route::get('/properties', [PropertyController::class, 'index']);
Route::get('/properties/{id}', [PropertyController::class, 'show']);

Route::get('/testimonials', [TestimonialController::class, 'index']);

Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/blogs/{id}', [BlogController::class, 'show']);

