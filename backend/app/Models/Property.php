<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'type',
        'location',
        'price',
        'bedrooms',
        'bathrooms',
        'area',
        'image',
        'is_featured',
        'rent_manager_id',
        'published_at',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'price' => 'decimal:2',
        'published_at' => 'datetime',
    ];

    public function rentManager()
    {
        return $this->belongsTo(RentManager::class);
    }
}

