# Database Design: Agents and Admins

## Design Decision: Separate Tables

**Recommendation: Use separate tables for Agents and Admins**

### Why Separate Tables?

1. **Different Attributes**: Agents have many specific fields (PRC license, agency info, license documents, etc.) that admins don't need. Admins have simpler requirements (name, email, role).

2. **Clear Separation of Concerns**: 
   - Agents are external users who register and need approval
   - Admins are internal staff who manage the system
   - Different authentication flows and permissions

3. **Scalability**: As the system grows, you can add agent-specific or admin-specific features without cluttering a single table.

4. **Data Integrity**: Separate tables allow for different validation rules, constraints, and business logic.

5. **Approval Tracking**: The `agent_approvals` table creates a clear audit trail of who approved/rejected which agent and when.

## Database Structure

### Tables Created

1. **`admins`** - Stores admin users
   - Fields: id, first_name, last_name, email, password, phone, role, is_active, timestamps
   - Roles: `super_admin`, `admin`, `moderator`
   - Extends `Authenticatable` for authentication

2. **`agents`** - Stores agent users (already existed)
   - Fields: All agent-specific information including PRC license details
   - Status: `pending`, `approved`, `rejected`
   - Extends `Authenticatable` for authentication

3. **`agent_approvals`** - Tracks approval history
   - Fields: id, agent_id, admin_id, action, notes, timestamps
   - Creates audit trail of all approval/rejection actions
   - Links agents to the admins who processed them

### Relationships

- `Admin` hasMany `AgentApproval`
- `Agent` hasMany `AgentApproval`
- `AgentApproval` belongsTo `Agent` and `Admin`

## Authentication

Both `Agent` and `Admin` models:
- Extend `Illuminate\Foundation\Auth\User as Authenticatable`
- Use `Laravel\Sanctum\HasApiTokens` trait
- Work with Laravel Sanctum for API authentication

**Important**: When an admin logs in and creates a token, `$request->user()` will return an `Admin` instance. The `AdminController` includes checks to ensure only `Admin` instances can access admin routes.

## API Endpoints

### Admin Authentication
- `POST /api/admin/login` - Admin login

### Admin Agent Management (Protected)
- `GET /api/admin/agents` - Get all agents (optional status filter)
- `GET /api/admin/agents/pending` - Get pending agents
- `GET /api/admin/agents/{id}` - Get agent details
- `POST /api/admin/agents/{id}/approve` - Approve an agent
- `POST /api/admin/agents/{id}/reject` - Reject an agent

## Usage Example

### Creating an Admin (via Seeder or Tinker)

```php
use App\Models\Admin;

Admin::create([
    'first_name' => 'John',
    'last_name' => 'Admin',
    'email' => 'admin@rentals.ph',
    'password' => 'secure_password',
    'role' => 'super_admin',
    'is_active' => true,
]);
```

### Admin Login Flow

1. Admin calls `POST /api/admin/login` with email/password
2. System validates credentials and checks if account is active
3. Returns a Sanctum token
4. Admin uses token in `Authorization: Bearer {token}` header for protected routes

### Approving an Agent

1. Admin calls `GET /api/admin/agents/pending` to see pending agents
2. Admin calls `GET /api/admin/agents/{id}` to review agent details
3. Admin calls `POST /api/admin/agents/{id}/approve` with optional notes
4. System:
   - Updates agent status to `approved`
   - Sets agent `verified` to `true`
   - Creates an `AgentApproval` record with admin_id, action, and notes

## Alternative Approaches Considered

### Option 1: Single Users Table with Role
- **Pros**: Simpler, single authentication system
- **Cons**: Can get messy with very different attributes, harder to scale

### Option 2: Separate Tables (Chosen)
- **Pros**: Clear separation, scalable, better for complex requirements
- **Cons**: Slightly more complex authentication (but handled by Sanctum)

### Option 3: Hybrid (Users + Profiles)
- **Pros**: Normalized design
- **Cons**: More complex relationships, joins required

## Migration Commands

To create the tables, run:

```bash
php artisan migrate
```

This will create:
- `admins` table
- `agent_approvals` table (adds foreign keys to existing `agents` table)

## Next Steps

1. Run migrations: `php artisan migrate`
2. Create initial admin user (via seeder or manually)
3. Test admin login endpoint
4. Test agent approval workflow

