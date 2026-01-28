<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AgentApproval extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'agent_id',
        'admin_id',
        'action',
        'notes',
    ];

    /**
     * Get the agent that was approved/rejected.
     */
    public function agent()
    {
        return $this->belongsTo(Agent::class);
    }

    /**
     * Get the admin who made the approval/rejection.
     */
    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }
}

