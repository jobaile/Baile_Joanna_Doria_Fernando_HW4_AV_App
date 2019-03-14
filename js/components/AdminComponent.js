export default {
    template: `
    <div>
    <h1>Admin Dashboard</h1>
    <h3>Welcome!</h3>
    <p> {{ message }}</p>
    <nav>
        <ul>
            <li><a href="#">Create User</a></li>
            <li><a href="#">Edit User</a></li>
            <li><a href="#">Delete User</a></li>
            <li><a href="">Sign Out</a></li>
            <!-- scripts/caller.php?caller_id=logout -->
        </ul>
    </nav>
    </div>
    `,

    data() {
        return {
            message: "Control Your Roku Flashback Experience"
        }
    }
}